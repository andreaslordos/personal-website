import React from 'react';
import Page from '../components/Page';
const Home = () => {
  return (
    <Page>
        <div className="container mx-auto px-4 py-8">
            <div className="justify-center flex mb-6 px-16 md:ml-20">
                <img
                    src="/images/face2.png"
                    alt="Face"
                    className="w-full"
                />
            </div>
            <div>
                <p>Hey, I'm Andreas, a Junior at Harvard studying Computer Science and Economics.</p>
                <br/>
                <b><u>Work</u></b>
                    <ul class='list-disc list-inside'>
                        <li>worked full stack at a unicorn procurement startup (<b><a href="https://www.ziphq.com" target='_blank'>Zip</a></b>)</li>
                        <li>did iOS dev at <b>Meta</b> </li>
                        <li>designed the new loyalty program for Cyprus' largest supermarket chain (<b><a href="https://alphamega.com.cy" target="_blank">Alphamega</a></b>)</li>
                    </ul>
                <br/>
                <b><u>School</u></b>
                <ul class='list-disc list-inside'>
                        <li>graduating in 2026, Computer Science (MSc & BA) and Economics (BA)</li>
                        <li>host weekly radio shows at <a href="https://www.whrb.org" target='_blank'><b>WHRB</b></a></li>
                        <li>brought the oldest literary magazine in the country (<b><a href="https://theharvardadvocate.com" target="_blank">The Advocate</a></b>) into the 21st century</li>
                        <li>helped teach a <b>Discrete Math</b> class</li>
                </ul>
                <br/>
                <b><u>Life</u></b>
                <ul class='list-disc list-inside'>
                        <li>grew up in Cyprus, moved to the US for college</li>
                        <li>served in the military for a year, went from border guard → aide to the General of the Army</li>
                        <li>discovered <b><a href="https://www.minorplanetcenter.net/db_search/show_object?utf8=%E2%9C%93&object_id=2018+PG3" target="_blank">this asteroid</a></b></li>
                </ul>
            </div>
        </div>
    </Page>
  );
};

export default Home;