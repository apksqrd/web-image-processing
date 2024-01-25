use super::Route;
use yew::prelude::*;
use yew_router::components::Link;

#[derive(PartialEq, Debug)]
pub enum Destination {
    Routed(Route),
    Link(String),
}

#[derive(PartialEq, Debug)]
pub struct NavigationItem {
    display_name: String,
    destination: Destination,
}

#[function_component]
pub fn NavigationBar() -> Html {
    // I am hardcoding navigation items
    let navigation_items = vec![
        NavigationItem {
            display_name: "Home".to_string(),
            destination: Destination::Routed(Route::Home),
        },
        NavigationItem {
            display_name: "Clickable Demo".to_string(),
            destination: Destination::Routed(Route::ClickableDemo),
        },
        NavigationItem {
            display_name: "Camera Demo".to_string(),
            destination: Destination::Routed(Route::CameraDemo),
        },
        NavigationItem {
            display_name: "Long Demo".to_string(),
            destination: Destination::Routed(Route::LongDemo),
        },
    ];

    let navigation_items_html = navigation_items
        .iter()
        .map(
            |NavigationItem {
                 display_name,
                 destination,
             }| {
                match destination {
                    Destination::Routed(route) => {
                        // link turns into <a> tag
                        html! { <li> <Link<Route> to={route.clone()}> {display_name} </Link<Route>> </li> }
                    }
                    Destination::Link(link) => {
                        html! { <li> <a href={link.clone()}> {display_name} </a> </li> }
                    }
                }
            },
        )
        .collect::<Html>();

    html! {
        <ul class="navbar">
            { navigation_items_html }
        </ul>
    }
}
