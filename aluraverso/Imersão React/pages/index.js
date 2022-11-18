import React, { useState, useEffect } from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import { videoService } from "../src/services/videoService"

function HomePage() {
    const service = videoService()
    const [searchValue, setSearchValue] = useState("")
    const [playlists, setPlaylists] = useState({})

    useEffect(() => {
        service.getAllVideos()
            .then(res => {
                console.log(res.data)
                //Forma imutavel
                const newPlaylists = {}
                res.data.forEach((video) => {
                    console.log(video)
                    if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = []
                    newPlaylists[video.playlist] = [video, ...newPlaylists[video.playlist]]
                })
                setPlaylists(newPlaylists)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(playlists)

    return (
        <>

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
                <Header />
                <Timeline searchValue={searchValue} playlists={playlists} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`

background-color: ${({ theme }) => theme.backgroundLevel1};

img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.user-info {
    display: flex;
    align-items: center;    
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
}
`
const StyledBanner = styled.div`
    background: url(${config.bg});
    height: 230px;
    width: 100%;
`
function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            {/*<img src="" alt="" />*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="profile" />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return (titleNormalized.includes(searchValueNormalized))
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}