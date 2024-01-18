use yew::prelude::*;
use yew_router::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    use super::Route;

    let navigator = use_navigator().unwrap();
    let onclick = Callback::from(move |_| navigator.clone().push(&Route::Home));

    html! {
        <>
            <button {onclick}>{"Click to go home"}</button>
        </>
    }
}
