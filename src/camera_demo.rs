use gloo_console::log;
use wasm_bindgen::{closure::Closure, JsCast, JsValue};
use web_sys::{HtmlVideoElement, MediaStream, MediaStreamConstraints, Node};
use yew::{prelude::*, Renderer};

fn get_camera_permission() {
    wasm_bindgen_futures::spawn_local(async {
        log!("point D");
        let navigator = web_sys::window().unwrap().navigator();

        log!("point C");
        let mut constraints = MediaStreamConstraints::new();
        log!("point B");
        log!(&constraints);
        constraints.video(&JsValue::TRUE);
        log!("point A");
        let promise = navigator
            .media_devices()
            .unwrap()
            .get_user_media_with_constraints(&constraints)
            .unwrap();

        log!("point E");
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

        log!("point F");
        let promise = promise.then2(&resolve, &reject);

        wasm_bindgen_futures::JsFuture::from(promise).await.unwrap();

        log!("point G");
    });
}

#[function_component(App)]
pub fn app() -> Html {
    let app = html! {
        <video id="camview" autoplay=true />
    };

    get_camera_permission();

    log!("point H");
    app
}
