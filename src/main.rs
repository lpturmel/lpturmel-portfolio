use app::App;
use leptos::*;

pub mod app;
pub mod components;

fn main() {
    mount_to_body(|| {
        view! {
            <App />
        }
    });
}
