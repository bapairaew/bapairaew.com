<?php

namespace App\Livewire\Components\Contents\Photos;

use Livewire\Component;

class PhotosSection extends Component
{
    public $photos;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/photos');
        $this->photos = array_slice(json_decode($response), 0, 8, true);
    }

    public function placeholder()
    {
        return view('livewire.components.contents.photos.photos-section-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.photos.photos-section');
    }
}
