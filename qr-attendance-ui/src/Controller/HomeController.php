<?php

namespace App\Controller;

use App\View\Template\View;

class HomeController
{
    public function index()
    {
        // Render the home view
        $view = new View('home');
        $view->render();
    }
}