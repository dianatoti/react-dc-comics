import comics from "./js/comics"

export default function Main() {
    const comicsList = comics.map((curComic) => (
        <div className="col-6 col-md-4 col-lg-2" key={curComic.id}>
            <div className="card-img">
                <img src={curComic.thumb} alt={curComic.id} />
            </div>
            <p className="card-title">
                {curComic.series}
            </p>
        </div>
    ));

    return (
        <main className="bg-dark py-5">
            <div className="container">
                <div className="row g-4">
                    {comicsList}
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-primary px-5">
                        LOAD MORE
                    </button>
                </div>
            </div>
        </main>
    );
}




