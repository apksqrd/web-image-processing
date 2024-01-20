mod camera_demo;
mod clickable_demo;
mod navigation_bar;
mod routes_demo;

use yew::prelude::*;
use yew::*;
use yew_router::prelude::*;

#[derive(Clone, Routable, PartialEq, Debug)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/clickable")]
    ClickableDemo,
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
        Route::CameraDemo => html! { <camera_demo::App/> },
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}

#[function_component(Main)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <navigation_bar::NavigationBar />
            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}

fn main() {
    Renderer::<Main>::new().render();
}
