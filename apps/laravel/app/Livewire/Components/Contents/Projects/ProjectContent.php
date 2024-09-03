<?php

namespace App\Livewire\Components\Contents\Projects;

use App\Services\CustomParsedown;
use Livewire\Component;

class ProjectContent extends Component
{
    public $project;
    protected $mkd;
    protected $tagsListText;
    protected $techStack;

    public function __construct()
    {
        $this->mkd = new CustomParsedown();
    }

    public function mount($project = null)
    {
        $tagsMap = array_reduce($project->tags, function ($map, $tag) {
            if (!isset($map[$tag->type])) {
                $map[$tag->type] = [];
            }
            $map[$tag->type][] = $tag->text;
            return $map;
        }, []);

        $techStackArray = array_filter([
            isset($tagsMap["App type"]) ? implode(" · ", $tagsMap["App type"]) : null,
            isset($tagsMap["Layer"]) ? implode(" · ", $tagsMap["Layer"]) : null,
            implode(" · ", array_merge(
                $tagsMap["Framework"] ?? [],
                $tagsMap["Database"] ?? []
            )),
            isset($tagsMap["Platform"]) ? implode(" · ", $tagsMap["Platform"]) : null,
            isset($tagsMap["Language"]) ? implode(" · ", $tagsMap["Language"]) : null,
            isset($tagsMap["Other"]) ? implode(" · ", $tagsMap["Other"]) : null,
        ]);

        $this->techStack = implode(" / ", $techStackArray);

        $this->tagsListText = implode(" · ", array_filter([
            $project->year,
            $tagsMap["Company"][0] ?? null
        ]));
    }

    public function placeholder()
    {
        return view('livewire.components.contents.projects.project-content-loading');
    }

    public function render()
    {
        return view('livewire.components.contents.projects.project-content');
    }
}
