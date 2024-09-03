<?php

namespace App\Livewire\Pages\Photography;

use Livewire\Component;

class Photo extends Component
{
    public $slug;
    public $photo;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/photos?slug=' . $this->slug);
        $this->photo = json_decode($response)[0];
    }

    public function render()
    {
        return view('livewire.pages.photography.photo');
    }
}
