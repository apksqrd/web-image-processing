mod camera_demo;
mod clickable_demo;
mod routes_demo;

use yew::prelude::*;
use yew::*;
use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    Home,
    #[at("/clickable")]
    ClickableDemo,
    #[at("/routes")]
    RoutesDemo,
    #[at("/camera")]
    CameraDemo,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <h1>{ "Home" }</h1> },
        Route::ClickableDemo => html! { <clickable_demo::App/> },
        Route::RoutesDemo => html! { <routes_demo::App/> },
        Route::CameraDemo => html! { <camera_demo::App/> },
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}

#[function_component(Main)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <p> {"hello"} </p>

            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}

fn main() {
    // clickable_demo::render();
    Renderer::<Main>::new().render();
}
