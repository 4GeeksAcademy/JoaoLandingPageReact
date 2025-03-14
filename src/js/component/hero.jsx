import React from "react";

//always components with capital letter
export const Hero = () => {

    //<> ----> React fragment
    return (
        <div class="bg-light p-5 rounded-lg m-3">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    )
}

