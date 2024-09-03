<?php

namespace App\Livewire\Components\Contents\Projects;

use Livewire\Component;

class ProjectCard extends Component
{
    public $project;

    public function render()
    {
        return view('livewire.components.contents.projects.project-card');
    }
}
