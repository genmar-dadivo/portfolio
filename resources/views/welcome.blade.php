<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

        <title>Portfolio</title>
    </head>
    <body>
        <div id="app">
            <appbody></appbody>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
