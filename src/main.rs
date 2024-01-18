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
    #[at("/additional")]
    Additional,
    #[at("/additional/*path")]
    AdditionalPathedA { path: String },
    #[at("/web-image-processing")]
    AlternativeHome,
    #[at("/web-image-processing/sub")]
    AlternativeSubpage,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! { <h1>{ "Home" }</h1> },
        Route::ClickableDemo => html! { <clickable_demo::App/> },
        Route::RoutesDemo => html! { <routes_demo::App/> },
        Route::Additional => html! { "Just Additional" },
        Route::AdditionalPathedA { path } => {
            html! { <> {"Additional A"} <br/> {"Path: "} {path} </> }
        }
        Route::AlternativeHome => html! { <h1>{ "Alternative Home" }</h1> },
        Route::AlternativeSubpage => html! { <h1>{ "Alternative Subpage" }</h1> },
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}

#[function_component(Main)]
fn app() -> Html {
    html! {
        <>
            <p> {"hi"} </p>
            <BrowserRouter>
                <p> {"hello"} </p>

                <Switch<Route> render={switch} /> // <- must be child of <BrowserRouter>
            </BrowserRouter>
        </>
    }
}

fn main() {
    // clickable_demo::render();
    Renderer::<Main>::new().render();
}
