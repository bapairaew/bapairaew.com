<?php

namespace App\Livewire\Components\Contents\Posts;

use App\Services\CustomParsedown;
use Livewire\Component;

class PostContent extends Component
{
    public $post;
    protected $mkd;

    public function __construct()
    {
        $this->mkd = new CustomParsedown();
    }

    public function placeholder()
    {
        return view('livewire.components.contents.posts.post-content-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.posts.post-content');
    }
}
