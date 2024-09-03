<?php

namespace App\Livewire\Pages\Photography;

use Livewire\Component;

class Index extends Component
{
    protected $photos;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/photos');
        $this->photos = json_decode($response);
    }

    public function render()
    {
        return view('livewire.pages.photography.index');
    }
}
