use gloo_console::log;
use wasm_bindgen::{closure::Closure, JsCast, JsValue};
use web_sys::{HtmlVideoElement, MediaStream, MediaStreamConstraints};
use yew::prelude::*;

fn get_camera_permission() {
    wasm_bindgen_futures::spawn_local(async {
        let navigator = web_sys::window().unwrap().navigator();

        let mut constraints = MediaStreamConstraints::new();
        log!(&constraints);
        constraints.video(&JsValue::TRUE);
        let promise = navigator
            .media_devices()
            .unwrap()
            .get_user_media_with_constraints(&constraints)
            .unwrap();

        let resolve = Closure::wrap(Box::from(|signal: JsValue| {
            log!("Working");

            let video_element = web_sys::window()
                .unwrap()
                .document()
                .unwrap()
                .get_element_by_id("camview")
                .unwrap()
                .unchecked_into::<HtmlVideoElement>();
            video_element.set_src_object(Some(&signal.unchecked_into::<MediaStream>()));
        }) as Box<dyn FnMut(JsValue)>);
        let reject = Closure::wrap(Box::from(|error| {
            log!("error: ", error);
        }) as Box<dyn FnMut(JsValue)>);

        let promise = promise.then2(&resolve, &reject);

        wasm_bindgen_futures::JsFuture::from(promise).await.unwrap();
    });
}

#[function_component(App)]
pub fn app() -> Html {
    let app = html! {
        <video id="camview" autoplay=true />
    };

    get_camera_permission();

    app
}
