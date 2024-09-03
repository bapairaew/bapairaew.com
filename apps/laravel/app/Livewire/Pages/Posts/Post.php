<?php

namespace App\Livewire\Pages\Posts;

use Livewire\Component;

class Post extends Component
{
    public $slug;
    public $post;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/posts?slug=' . $this->slug);
        $this->post = json_decode($response)[0];
    }

    public function render()
    {
        return view('livewire.pages.posts.post');
    }
}
