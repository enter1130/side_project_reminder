<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
    <head>
        <title>{{ (isset($title))? $title:"Side Project" }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body style="background-color: whitesmoke" oncontextmenu='self.event.returnValue=false'>
        @yield('Content')
        <script src="{{asset('js/app.js')}}" defer></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </body>
</html>