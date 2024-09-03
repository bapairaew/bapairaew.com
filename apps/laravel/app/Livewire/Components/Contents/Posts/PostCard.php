<?php

namespace App\Livewire\Components\Contents\Posts;

use Livewire\Component;

class PostCard extends Component
{
    public $post;

    public function render()
    {
        return view('livewire.components.contents.posts.post-card');
    }
}
