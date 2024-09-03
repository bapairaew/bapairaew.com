<?php

namespace App\Livewire\Components\Contents\Posts;

use Livewire\Component;

class PostsSection extends Component
{
    public $posts;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/posts');
        $this->posts = array_slice(json_decode($response), 0, 6, true);
    }

    public function placeholder()
    {
        return view('livewire.components.contents.posts.posts-section-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.posts.posts-section');
    }
}
