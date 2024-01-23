use std::rc::Rc;

use super::Route;
use yew::prelude::*;
use yew_router::hooks::use_navigator;

#[derive(PartialEq, Debug)]
pub enum Destination {
    Routed(Route),
    Link(String), // prefered
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
            destination: Destination::Link("/".to_string()),
        },
        NavigationItem {
            display_name: "Clickable Demo".to_string(),
            destination: Destination::Link("/clickable".to_string()),
        },
        NavigationItem {
            display_name: "Camera Demo".to_string(),
            destination: Destination::Link("/camera".to_string()),
        },
        NavigationItem {
            display_name: "Long Demo".to_string(),
            destination: Destination::Link("/long".to_string()),
        },
    ];

    let navigator = Rc::from(use_navigator().unwrap());

    let navigation_items_html = navigation_items
        .iter()
        .map(
            |NavigationItem {
                 display_name,
                 destination,
             }| {
                let destination = destination.clone();

                match destination {
                    Destination::Routed(route) => {
                        // this line works... for some reason
                        let route = route.clone();
                        let navigator = navigator.clone();

                        let onclick: Callback<MouseEvent> =
                            Callback::from(move |_| navigator.clone().push(&route.clone()));

                        html! { <li onclick={onclick}> <a> {display_name} </a> </li> }
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
