use std::rc::Rc;

use super::Route;
use yew::prelude::*;
use yew_router::hooks::use_navigator;

#[derive(PartialEq, Debug)]
pub struct NavigationItem {
    display_name: String,
    destination_route: Route,
}

#[function_component]
pub fn NavigationBar() -> Html {
    // I am hardcoding navigation items
    let navigation_items = vec![
        NavigationItem {
            display_name: "Home".to_string(),
            destination_route: Route::Home,
        },
        NavigationItem {
            display_name: "Clickable Demo".to_string(),
            destination_route: Route::ClickableDemo,
        },
        NavigationItem {
            display_name: "Camera Demo".to_string(),
            destination_route: Route::CameraDemo,
        },
    ];

    let navigator = Rc::from(use_navigator().unwrap());

    let navigation_items_html = navigation_items
        .iter()
        .map(
            |NavigationItem {
                 display_name,
                 destination_route,
             }| {
                // this line works... for some reason
                let navigator = navigator.clone();
                let destination_route = destination_route.clone();

                let onclick: Callback<MouseEvent> =
                    Callback::from(move |_| navigator.clone().push(&destination_route.clone()));

                html! { <li onclick={onclick}> {display_name} </li> }
            },
        )
        .collect::<Html>();

    html! {
        <ul class="navbar">
            { navigation_items_html }
        </ul>
    }
}
