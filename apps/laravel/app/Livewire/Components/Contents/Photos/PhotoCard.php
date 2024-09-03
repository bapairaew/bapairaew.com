<?php

namespace App\Livewire\Components\Contents\Photos;

use Livewire\Component;

class PhotoCard extends Component
{
    public $photo;

    public function render()
    {
        return view('livewire.components.contents.photos.photo-card');
    }
}
