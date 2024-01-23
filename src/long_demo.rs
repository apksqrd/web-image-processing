use lipsum::lipsum;
use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <p>
            { lipsum(1000) }
        </p>
    }
}
