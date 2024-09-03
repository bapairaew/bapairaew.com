<?php

namespace App\Livewire\Pages\Projects;

use Livewire\Component;

class Project extends Component
{
    public $slug;
    public $project;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/projects?slug=' . $this->slug);
        $this->project = json_decode($response)[0];
    }

    public function render()
    {
        return view('livewire.pages.projects.project');
    }
}
