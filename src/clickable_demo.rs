use gloo_console::log;
use yew::*;

#[derive(PartialEq, Properties, Debug)]
pub struct ClickableProps {
    #[prop_or_default]
    children: Html,
}

pub struct Clickable;
impl Component for Clickable {
    type Message = ();
    type Properties = ClickableProps;

    fn create(ctx: &Context<Self>) -> Self {
        log!("Created with props: ", format!("{:?}", ctx.props()));
        Self
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let to_print = format!("{:?}", ctx.props());
        html! {
            <p onclick={Callback::from(move |_| log!("Clicked: ", to_print.clone()))}>
                {ctx.props().children.clone()}
            </p>
        }
    }
}

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <Clickable>
            <p> {"Clickable child"} </p>
        </Clickable>
    }
}
