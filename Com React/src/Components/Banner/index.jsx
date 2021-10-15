import './style.scss'


export default function Banner() {
    return (

        <section class="nz-banner">
            <div class="nz-container">
                <div class="nz-banner__img">
                    <div class="nz-logo"></div>
                    <h1>Explore the best food</h1>
                    <input className="navbarinput" type="text" placeholder="Specify your taste" />
                </div>
            </div>
        </section>


    )
}