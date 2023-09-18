use crate::components::avatar::Avatar;
use crate::components::github::GithubLogo;
use crate::components::linkedin::LinkedInLogo;
use leptos::*;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <div class="flex pt-40 w-full justify-center">
            <div class="container flex flex-col gap-4 max-w-xl bg-base-200 p-8 rounded-md">

                <div class="flex gap-8 items-center justify-center w-full">
                    <Avatar src="lp.webp"  />
                    <h1 class="font-semibold text-2xl"> <span class="text-neutral mr-2"> ## </span> "Louis-Philippe Turmel 🦀" </h1>
                </div>

                <article>
                    <p>"I'm a DevOps developer from" <span class="mr-2 ml-2 underline"> "Montreal, Canada." </span>  "I'm currently working" <a class="ml-2 text-info" href="https://cyncly.com" target="_blank"> "@Cyncly."</a></p>
                    <p> "I build tooling & applications mainly in Rust." </p>
                    <div class="p-8 flex gap-8 items-center"> <span class="loading text-primary loading-infinity loading-lg"></span> <p class="font-bold text-xl">WIP</p> </div>
                </article>


                <div class="flex gap-4 w-full justify-end">
                    <a class="btn btn-neutral" target="_blank" href="https://github.com/lpturmel"> <GithubLogo /> "See Github" </a>
                    <a class="btn btn-info" target="_blank" href="https://ca.linkedin.com/in/louis-philippe-turmel-5a5463164"> <LinkedInLogo /> "See LinkedIn" </a>
                </div>
            </div>
        </div>
    }
}
