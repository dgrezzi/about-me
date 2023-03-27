import { useEffect, useState } from "react";

export function Main() {
    const [name, setName] = useState()
    const [url, setUrl] = useState()

    useEffect(() => {
        fetch(`https://api.github.com/users/dgrezzi`)
            .then(async res => {
                const dados = await res.json();
                setName(dados.name)
                setUrl(dados.avatar_url)
            });
    }, []);

    return (
        <>
            <div className="container">
                <img src={url} alt="Avatar" />
                <div className="description">
                    <h1>Hello!</h1>
                    <h2>About me:</h2>
                    <p className="indent">
                        "My name is {name} and I'm a Brazilian living in West
                        Sussex, England. Graduated in Chemistry, I have always had a
                        strong interest in programming. During college, I had the
                        opportunity to develop laboratory analysis equipment
                        programmed with Arduino microcontroller. For 10 years, I
                        worked as an analytical chemist in laboratories for large
                        pharmaceutical multinationals. Seeking new challenges, I
                        decided to delve into the world of programming and learn new
                        languages.
                    </p>
                    <p className="indent">
                        Currently, I am focused on learning web and mobile systems
                        development, which allows me to expand my knowledge and
                        skills in programming and apply them to challenging
                        projects. I am always seeking new opportunities to grow and
                        learn as a developer, while continuing to expand my career
                        in the world of technology."
                    </p>
                </div>
            </div>
        </>
    )
}