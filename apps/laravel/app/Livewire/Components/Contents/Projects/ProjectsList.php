<?php

namespace App\Livewire\Components\Contents\Projects;

use Livewire\Component;

class ProjectsList extends Component
{
    public $projects;

    public function placeholder()
    {
        return view('livewire.components.contents.projects.projects-list-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.projects.projects-list');
    }
}
