<?php

namespace App\Livewire\Pages\Projects;

use Livewire\Component;

class Index extends Component
{
    protected $projects;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/projects');
        $this->projects = json_decode($response);
    }

    public function render()
    {
        return view('livewire.pages.projects.index');
    }
}
