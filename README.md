# Rust on Web with Yew

Started with <https://yew.rs/docs/tutorial>

This works on my computer with `trunk serve --open`.

For help with deployment on github pages, <https://www.youtube.com/watch?v=Grk4_tbBCsc> was the best resource.
Run `trunk build --release --public-url web-image-processing/` to build correctly.

A [rust videocall web app](https://github.com/security-union/videocall-rs/blob/115152b03038ed1764464fe82433cb618a6e110a/yew-ui/src/components/host.rs#L92-L110) was a good example for getting camera input.

Working  with the camera stuff seems like too big a jump from doing the tutorial, so I am going to just experiment right now.

I am going to test if yew-router works in github pages. For now, I need to test by manually inputting the page names.

Github Pages works differently than trunk serve, so it turns out routers need hacks to work. From <https://github.com/orgs/community/discussions/64096>, it turns out I can either use hash router instead of browser router, or I could do something with the 404.html.

I figured out my own hack: just make the 404.html a copy of the index.
I made a script to automate it and can be used with `./build.sh` and you might need to do `chmod +x build.sh`.
