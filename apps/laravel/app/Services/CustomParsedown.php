<?php

namespace App\Services;

use Parsedown;

class CustomParsedown extends Parsedown
{
  private $baseImagePath = 'https://data.bapairaew.com/';

  protected function inlineImage($excerpt)
  {
    $image = parent::inlineImage($excerpt);

    if (! isset($image)) {
      return null;
    }

    $altText = $image['element']['attributes']['alt'] ?? '';

    $figure = [
      'name' => 'figure',
      'handler' => 'elements',
      'text' => [
        [
          'name' => 'img',
          'attributes' => [
            'src' => $this->baseImagePath . $image['element']['attributes']['src'],
            'alt' => $altText,
            'loading' => 'lazy',
          ],
        ],
        [
          'name' => 'figcaption',
          'attributes' => [
            'class' => 'text-center',
          ],
          'text' => $altText,
        ],
      ],
    ];

    return ['extent' => $image['extent'], 'element' => $figure];
  }

  protected function blockMarkup($Line)
  {
    $Block = parent::blockMarkup($Line);

    if ($Block !== null) {
      return $Block;
    }

    if (preg_match('/!\[(.*?)\]\((.*?)\)/', $Line['text'], $matches)) {
      $altText = $matches[1];
      $src = $matches[2];

      $Block = [
        'element' => [
          'name' => 'figure',
          'handler' => 'elements',
          'text' => [
            [
              'name' => 'img',
              'attributes' => [
                'src' => $src,
                'alt' => $altText,
              ],
            ],
            [
              'name' => 'figcaption',

              'attributes' => [
                'class' => 'text-center',
              ],
              'text' => $altText,
            ],
          ],
        ],
      ];

      return $Block;
    }

    return null;
  }

  protected function inlineLink($excerpt)
  {
    $link = parent::inlineLink($excerpt);

    if (!isset($link['element']['attributes']['href'])) {
      return $link;
    }

    $href = $link['element']['attributes']['href'];

    // Check if the link is external
    if ($this->isExternalLink($href)) {
      $link['element']['attributes']['target'] = '_blank';
      $link['element']['attributes']['rel'] = 'noopener noreferrer';
    }

    return $link;
  }

  protected function isExternalLink($url)
  {
    $host = parse_url($url, PHP_URL_HOST);

    // Assuming your site is example.com, replace this with your actual domain
    return $host && $host !== 'example.com' && !empty($host);
  }
}
