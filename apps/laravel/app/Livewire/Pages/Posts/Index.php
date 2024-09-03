<?php

namespace App\Livewire\Pages\Posts;

use Livewire\Component;

class Index extends Component
{
    protected $posts;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/posts');
        $this->posts = json_decode($response);
    }

    public function render()
    {
        return view('livewire.pages.posts.index');
    }
}
