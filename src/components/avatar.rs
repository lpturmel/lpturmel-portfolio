use leptos::*;

#[component]
pub fn Avatar(src: &'static str) -> impl IntoView {
    view! {
        <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src=src alt="avatar" />
            </div>
        </div>
    }
}
