<?php

namespace App\Livewire\Components\Contents\Photos;

use Livewire\Component;

class PhotosList extends Component
{
    public $photos;

    public function placeholder()
    {
        return view('livewire.components.contents.photos.photos-list-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.photos.photos-list');
    }
}
