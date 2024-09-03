<?php

namespace App\Livewire\Components\Contents\Projects;

use Livewire\Component;

class ProjectsSection extends Component
{
    public $projects;

    public function mount()
    {
        $response = file_get_contents('https://data.bapairaew.com/projects');
        $this->projects = array_slice(json_decode($response), 0, 8, true);
    }

    public function placeholder()
    {
        return view('livewire.components.contents.projects.projects-section-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.projects.projects-section');
    }
}
