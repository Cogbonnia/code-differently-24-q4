
import htm from "htm";
import { createElement } from "react";
import TitleSlide from "./TitleSlide.js";

const html = htm.bind(createElement);

function Slides() {
  return html`
    <div class="slides">
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide1.png" alt="Slide 1" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide2.png" alt="Slide 2" />
        </section>
        <${TitleSlide} title="Git Fundamentals" slideId="lesson_00" subtitle="Lesson 0" />
        <section class="ml-bullet-slide">
            <h3>What we're doing</h3>
            <ul>
                <li class="fragment">Why we need version control</li>
                <li class="fragment">What is Git and GitHub?</li>
                <li class="fragment">Working with forks and branches</li>
                <li class="fragment">Learning the basic workflow</li>
            </ul>
        </section>
        <section>
            <p>Why we need <em>version control</em></p>
        </section>
        <section class="ml-bullet-slide">
            <h3>Why we need <em>version control</em></h3>
            <ul>
                <li class="fragment">Track changes over time</li>
                <li class="fragment">Collaborate with others</li>
                <li class="fragment">Revert to previous versions</li>
                <li class="fragment">Backup your work</li>
            </ul>
        </section>
        <section>
            <p>What is <em>Git</em> and <em>GitHub</em>?</p>
        </section>
        <section>
            <p><em>Git</em> is a distributed version control system (VCS) that works well for branching and is fast</p>
        </section>
        <section>
            <p><em>GitHub</em> is a platform for hosting Git repositories and features tools for managing software collaboration</p>
        </section>
        <section>
            <p>Working with <em>Forks</em> and <em>Branches</em></p>
        </section>
        <section>
            <p>A <em>branch</em> is a copy of the repo that allows you to make changes and merge them back later</p>
        </section>
        <section>
            <p><em>Forks</em> are just branched copies of other user's repos that you own and modify</p>
        </section>
        <section class="ml-bullet-slide">
            <h3>Why we <em>branch</em></h3>
            <ul>
                <li class="fragment">Work on features or fixes without impacting work happening in other places</li>
                <li class="fragment">Run tests or deployments</li>
                <li class="fragment">Experiment with changes safely</li>
            </ul>
        </section>
        <section>
            <p>Learning the <em>basic workflow</em></p>
        </section>
        <section class="ml-bullet-slide">
            <h3>The <em>basic workflow</em></h3>
            <ol>
                <li class="fragment">Pull the latest changes from other devs</li>
                <li class="fragment">Change some more stuff</li>
                <li class="fragment">Commit to git locally</li>
                <li class="fragment">Push to server remotely (GitHub)</li>
                <li class="fragment">Repeat 1–4 a bunch</li>
                <li class="fragment">Create a pull request (PR) when done</li>
            </ol>
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide16.png" alt="Slide 16" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide17.png" alt="Slide 17" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide18.png" alt="Slide 18" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide19.png" alt="Slide 19" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide20.png" alt="Slide 20" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide21.png" alt="Slide 21" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide22.png" alt="Slide 22" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide23.png" alt="Slide 23" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide24.png" alt="Slide 24" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide25.png" alt="Slide 25" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide26.png" alt="Slide 26" />
        </section>
        <${TitleSlide} title="Getting to Know the IDE" slideId="lesson_01" subtitle="Lesson 1" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide28.png" alt="Slide 28" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide29.png" alt="Slide 29" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide30.png" alt="Slide 30" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide31.png" alt="Slide 31" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide32.png" alt="Slide 32" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide33.png" alt="Slide 33" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide34.png" alt="Slide 34" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide35.png" alt="Slide 35" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide36.png" alt="Slide 36" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide37.png" alt="Slide 37" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide38.png" alt="Slide 38" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide39.png" alt="Slide 39" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide40.png" alt="Slide 40" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide41.png" alt="Slide 41" />
        </section>
        <${TitleSlide} title="Exploring the Terminal" slideId="lesson_02" subtitle="Lesson 2" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide43.png" alt="Slide 43" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide44.png" alt="Slide 44" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide45.png" alt="Slide 45" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide46.png" alt="Slide 46" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide47.png" alt="Slide 47" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide48.png" alt="Slide 48" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide49.png" alt="Slide 49" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide50.png" alt="Slide 50" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide51.png" alt="Slide 51" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide52.png" alt="Slide 52" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide53.png" alt="Slide 53" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide54.png" alt="Slide 54" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide55.png" alt="Slide 55" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide56.png" alt="Slide 56" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide57.png" alt="Slide 57" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide58.png" alt="Slide 58" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide59.png" alt="Slide 59" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide60.png" alt="Slide 60" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide61.png" alt="Slide 61" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide62.png" alt="Slide 62" />
        </section>
        <${TitleSlide} title="How Computers Work" slideId="lesson_03" subtitle="Lesson 3" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide64.png" alt="Slide 64" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide65.png" alt="Slide 65" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide66.png" alt="Slide 66" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide67.png" alt="Slide 67" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide68.png" alt="Slide 68" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide69.png" alt="Slide 69" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide70.png" alt="Slide 70" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide71.png" alt="Slide 71" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide72.png" alt="Slide 72" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide73.png" alt="Slide 73" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide74.png" alt="Slide 74" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide75.png" alt="Slide 75" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide76.png" alt="Slide 76" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide77.png" alt="Slide 77" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide78.png" alt="Slide 78" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide79.png" alt="Slide 79" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide80.png" alt="Slide 80" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide81.png" alt="Slide 81" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide82.png" alt="Slide 82" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide83.png" alt="Slide 83" />
        </section>
        <${TitleSlide} title="How to be a Great SWE" slideId="lesson_04" subtitle="Lesson 4" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide85.png" alt="Slide 85" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide86.png" alt="Slide 86" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide87.png" alt="Slide 87" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide88.png" alt="Slide 88" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide89.png" alt="Slide 89" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide90.png" alt="Slide 90" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide91.png" alt="Slide 91" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide92.png" alt="Slide 92" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide93.png" alt="Slide 93" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide94.png" alt="Slide 94" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide95.png" alt="Slide 95" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide96.png" alt="Slide 96" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide97.png" alt="Slide 97" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide98.png" alt="Slide 98" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide99.png" alt="Slide 99" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide100.png" alt="Slide 100" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide101.png" alt="Slide 101" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide102.png" alt="Slide 102" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide103.png" alt="Slide 103" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide104.png" alt="Slide 104" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide105.png" alt="Slide 105" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide106.png" alt="Slide 106" />
        </section>
        <${TitleSlide} title="Software Dev Life Cycle" slideId="lesson_05" subtitle="Lesson 5" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide108.png" alt="Slide 108" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide109.png" alt="Slide 109" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide110.png" alt="Slide 110" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide111.png" alt="Slide 111" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide112.png" alt="Slide 112" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide113.png" alt="Slide 113" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide114.png" alt="Slide 114" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide115.png" alt="Slide 115" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide116.png" alt="Slide 116" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide117.png" alt="Slide 117" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide118.png" alt="Slide 118" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide119.png" alt="Slide 119" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide120.png" alt="Slide 120" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide121.png" alt="Slide 121" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide122.png" alt="Slide 122" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide123.png" alt="Slide 123" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide124.png" alt="Slide 124" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide125.png" alt="Slide 125" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide126.png" alt="Slide 126" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide127.png" alt="Slide 127" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide128.png" alt="Slide 128" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide129.png" alt="Slide 129" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide130.png" alt="Slide 130" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide131.png" alt="Slide 131" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide132.png" alt="Slide 132" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide133.png" alt="Slide 133" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide134.png" alt="Slide 134" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide135.png" alt="Slide 135" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide136.png" alt="Slide 136" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide137.png" alt="Slide 137" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide138.png" alt="Slide 138" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide139.png" alt="Slide 139" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide140.png" alt="Slide 140" />
        </section>
        <${TitleSlide} title="Statements and Variables" slideId="lesson_06" subtitle="Lesson 6" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide142.png" alt="Slide 142" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide143.png" alt="Slide 143" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide144.png" alt="Slide 144" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide145.png" alt="Slide 145" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide146.png" alt="Slide 146" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide147.png" alt="Slide 147" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide148.png" alt="Slide 148" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide149.png" alt="Slide 149" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide150.png" alt="Slide 150" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide151.png" alt="Slide 151" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide152.png" alt="Slide 152" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide153.png" alt="Slide 153" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide154.png" alt="Slide 154" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide155.png" alt="Slide 155" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide156.png" alt="Slide 156" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide157.png" alt="Slide 157" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide158.png" alt="Slide 158" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide159.png" alt="Slide 159" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide160.png" alt="Slide 160" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide161.png" alt="Slide 161" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide162.png" alt="Slide 162" />
        </section>
        <${TitleSlide} title="Control Flow" slideId="lesson_07" subtitle="Lesson 7" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide164.png" alt="Slide 164" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide165.png" alt="Slide 165" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide166.png" alt="Slide 166" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide167.png" alt="Slide 167" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide168.png" alt="Slide 168" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide169.png" alt="Slide 169" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide170.png" alt="Slide 170" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide171.png" alt="Slide 171" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide172.png" alt="Slide 172" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide173.png" alt="Slide 173" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide174.png" alt="Slide 174" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide175.png" alt="Slide 175" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide176.png" alt="Slide 176" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide177.png" alt="Slide 177" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide178.png" alt="Slide 178" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide179.png" alt="Slide 179" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide180.png" alt="Slide 180" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide181.png" alt="Slide 181" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide182.png" alt="Slide 182" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide183.png" alt="Slide 183" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide184.png" alt="Slide 184" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide185.png" alt="Slide 185" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide186.png" alt="Slide 186" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide187.png" alt="Slide 187" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide188.png" alt="Slide 188" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide189.png" alt="Slide 189" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide190.png" alt="Slide 190" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide191.png" alt="Slide 191" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide192.png" alt="Slide 192" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide193.png" alt="Slide 193" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide194.png" alt="Slide 194" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide195.png" alt="Slide 195" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide196.png" alt="Slide 196" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide197.png" alt="Slide 197" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide198.png" alt="Slide 198" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide199.png" alt="Slide 199" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide200.png" alt="Slide 200" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide201.png" alt="Slide 201" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide202.png" alt="Slide 202" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide203.png" alt="Slide 203" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide204.png" alt="Slide 204" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide205.png" alt="Slide 205" />
        </section>
        <${TitleSlide} title="Functions" slideId="lesson_08" subtitle="Lesson 8" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide207.png" alt="Slide 207" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide208.png" alt="Slide 208" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide209.png" alt="Slide 209" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide210.png" alt="Slide 210" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide211.png" alt="Slide 211" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide212.png" alt="Slide 212" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide213.png" alt="Slide 213" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide214.png" alt="Slide 214" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide215.png" alt="Slide 215" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide216.png" alt="Slide 216" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide217.png" alt="Slide 217" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide218.png" alt="Slide 218" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide219.png" alt="Slide 219" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide220.png" alt="Slide 220" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide221.png" alt="Slide 221" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide222.png" alt="Slide 222" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide223.png" alt="Slide 223" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide224.png" alt="Slide 224" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide225.png" alt="Slide 225" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide226.png" alt="Slide 226" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide227.png" alt="Slide 227" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide228.png" alt="Slide 228" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide229.png" alt="Slide 229" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide230.png" alt="Slide 230" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide231.png" alt="Slide 231" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide232.png" alt="Slide 232" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide233.png" alt="Slide 233" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide234.png" alt="Slide 234" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide235.png" alt="Slide 235" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide236.png" alt="Slide 236" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide237.png" alt="Slide 237" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide238.png" alt="Slide 238" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide239.png" alt="Slide 239" />
        </section>
        <${TitleSlide} title="Data Types" slideId="lesson_09" subtitle="Lesson 9" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide241.png" alt="Slide 241" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide242.png" alt="Slide 242" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide243.png" alt="Slide 243" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide244.png" alt="Slide 244" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide245.png" alt="Slide 245" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide246.png" alt="Slide 246" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide247.png" alt="Slide 247" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide248.png" alt="Slide 248" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide249.png" alt="Slide 249" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide250.png" alt="Slide 250" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide251.png" alt="Slide 251" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide252.png" alt="Slide 252" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide253.png" alt="Slide 253" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide254.png" alt="Slide 254" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide255.png" alt="Slide 255" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide256.png" alt="Slide 256" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide257.png" alt="Slide 257" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide258.png" alt="Slide 258" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide259.png" alt="Slide 259" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide260.png" alt="Slide 260" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide261.png" alt="Slide 261" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide262.png" alt="Slide 262" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide263.png" alt="Slide 263" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide264.png" alt="Slide 264" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide265.png" alt="Slide 265" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide266.png" alt="Slide 266" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide267.png" alt="Slide 267" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide268.png" alt="Slide 268" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide269.png" alt="Slide 269" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide270.png" alt="Slide 270" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide271.png" alt="Slide 271" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide272.png" alt="Slide 272" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide273.png" alt="Slide 273" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide274.png" alt="Slide 274" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide275.png" alt="Slide 275" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide276.png" alt="Slide 276" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide277.png" alt="Slide 277" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide278.png" alt="Slide 278" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide279.png" alt="Slide 279" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide280.png" alt="Slide 280" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide281.png" alt="Slide 281" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide282.png" alt="Slide 282" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide283.png" alt="Slide 283" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide284.png" alt="Slide 284" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide285.png" alt="Slide 285" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide286.png" alt="Slide 286" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide287.png" alt="Slide 287" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide288.png" alt="Slide 288" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide289.png" alt="Slide 289" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide290.png" alt="Slide 290" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide291.png" alt="Slide 291" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide292.png" alt="Slide 292" />
        </section>
        <${TitleSlide} title="Libraries" slideId="lesson_10" subtitle="Lesson 10" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide294.png" alt="Slide 294" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide295.png" alt="Slide 295" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide296.png" alt="Slide 296" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide297.png" alt="Slide 297" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide298.png" alt="Slide 298" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide299.png" alt="Slide 299" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide300.png" alt="Slide 300" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide301.png" alt="Slide 301" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide302.png" alt="Slide 302" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide303.png" alt="Slide 303" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide304.png" alt="Slide 304" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide305.png" alt="Slide 305" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide306.png" alt="Slide 306" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide307.png" alt="Slide 307" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide308.png" alt="Slide 308" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide309.png" alt="Slide 309" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide310.png" alt="Slide 310" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide311.png" alt="Slide 311" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide312.png" alt="Slide 312" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide313.png" alt="Slide 313" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide314.png" alt="Slide 314" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide315.png" alt="Slide 315" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide316.png" alt="Slide 316" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide317.png" alt="Slide 317" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide318.png" alt="Slide 318" />
        </section>
        <${TitleSlide} title="Data Structures: Strings & Arrays" slideId="lesson_11" subtitle="Lesson 11" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide320.png" alt="Slide 320" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide321.png" alt="Slide 321" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide322.png" alt="Slide 322" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide323.png" alt="Slide 323" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide324.png" alt="Slide 324" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide325.png" alt="Slide 325" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide326.png" alt="Slide 326" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide327.png" alt="Slide 327" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide328.png" alt="Slide 328" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide329.png" alt="Slide 329" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide330.png" alt="Slide 330" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide331.png" alt="Slide 331" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide332.png" alt="Slide 332" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide333.png" alt="Slide 333" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide334.png" alt="Slide 334" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide335.png" alt="Slide 335" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide336.png" alt="Slide 336" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide337.png" alt="Slide 337" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide338.png" alt="Slide 338" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide339.png" alt="Slide 339" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide340.png" alt="Slide 340" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide341.png" alt="Slide 341" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide342.png" alt="Slide 342" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide343.png" alt="Slide 343" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide344.png" alt="Slide 344" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide345.png" alt="Slide 345" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide346.png" alt="Slide 346" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide347.png" alt="Slide 347" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide348.png" alt="Slide 348" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide349.png" alt="Slide 349" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide350.png" alt="Slide 350" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide351.png" alt="Slide 351" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide352.png" alt="Slide 352" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide353.png" alt="Slide 353" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide354.png" alt="Slide 354" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide355.png" alt="Slide 355" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide356.png" alt="Slide 356" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide357.png" alt="Slide 357" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide358.png" alt="Slide 358" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide359.png" alt="Slide 359" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide360.png" alt="Slide 360" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide361.png" alt="Slide 361" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide362.png" alt="Slide 362" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide363.png" alt="Slide 363" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide364.png" alt="Slide 364" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide365.png" alt="Slide 365" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide366.png" alt="Slide 366" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide367.png" alt="Slide 367" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide368.png" alt="Slide 368" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide369.png" alt="Slide 369" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide370.png" alt="Slide 370" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide371.png" alt="Slide 371" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide372.png" alt="Slide 372" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide373.png" alt="Slide 373" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide374.png" alt="Slide 374" />
        </section>
        <${TitleSlide} title="Data Structures: Stacks & Queues" slideId="lesson_12" subtitle="Lesson 12" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide376.png" alt="Slide 376" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide377.png" alt="Slide 377" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide378.png" alt="Slide 378" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide379.png" alt="Slide 379" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide380.png" alt="Slide 380" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide381.png" alt="Slide 381" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide382.png" alt="Slide 382" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide383.png" alt="Slide 383" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide384.png" alt="Slide 384" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide385.png" alt="Slide 385" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide386.png" alt="Slide 386" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide387.png" alt="Slide 387" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide388.png" alt="Slide 388" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide389.png" alt="Slide 389" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide390.png" alt="Slide 390" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide391.png" alt="Slide 391" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide392.png" alt="Slide 392" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide393.png" alt="Slide 393" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide394.png" alt="Slide 394" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide395.png" alt="Slide 395" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide396.png" alt="Slide 396" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide397.png" alt="Slide 397" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide398.png" alt="Slide 398" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide399.png" alt="Slide 399" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide400.png" alt="Slide 400" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide401.png" alt="Slide 401" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide402.png" alt="Slide 402" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide403.png" alt="Slide 403" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide404.png" alt="Slide 404" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide405.png" alt="Slide 405" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide406.png" alt="Slide 406" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide407.png" alt="Slide 407" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide408.png" alt="Slide 408" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide409.png" alt="Slide 409" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide410.png" alt="Slide 410" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide411.png" alt="Slide 411" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide412.png" alt="Slide 412" />
        </section>
        <${TitleSlide} title="Data Structures: Maps & Sets" slideId="lesson_13" subtitle="Lesson 13" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide414.png" alt="Slide 414" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide415.png" alt="Slide 415" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide416.png" alt="Slide 416" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide417.png" alt="Slide 417" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide418.png" alt="Slide 418" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide419.png" alt="Slide 419" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide420.png" alt="Slide 420" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide421.png" alt="Slide 421" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide422.png" alt="Slide 422" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide423.png" alt="Slide 423" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide424.png" alt="Slide 424" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide425.png" alt="Slide 425" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide426.png" alt="Slide 426" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide427.png" alt="Slide 427" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide428.png" alt="Slide 428" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide429.png" alt="Slide 429" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide430.png" alt="Slide 430" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide431.png" alt="Slide 431" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide432.png" alt="Slide 432" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide433.png" alt="Slide 433" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide434.png" alt="Slide 434" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide435.png" alt="Slide 435" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide436.png" alt="Slide 436" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide437.png" alt="Slide 437" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide438.png" alt="Slide 438" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide439.png" alt="Slide 439" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide440.png" alt="Slide 440" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide441.png" alt="Slide 441" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide442.png" alt="Slide 442" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide443.png" alt="Slide 443" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide444.png" alt="Slide 444" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide445.png" alt="Slide 445" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide446.png" alt="Slide 446" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide447.png" alt="Slide 447" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide448.png" alt="Slide 448" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide449.png" alt="Slide 449" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide450.png" alt="Slide 450" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide451.png" alt="Slide 451" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide452.png" alt="Slide 452" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide453.png" alt="Slide 453" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide454.png" alt="Slide 454" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide455.png" alt="Slide 455" />
        </section>
        <${TitleSlide} title="Exception Handling" slideId="lesson_14" subtitle="Lesson 14" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide457.png" alt="Slide 457" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide458.png" alt="Slide 458" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide459.png" alt="Slide 459" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide460.png" alt="Slide 460" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide461.png" alt="Slide 461" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide462.png" alt="Slide 462" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide463.png" alt="Slide 463" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide464.png" alt="Slide 464" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide465.png" alt="Slide 465" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide466.png" alt="Slide 466" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide467.png" alt="Slide 467" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide468.png" alt="Slide 468" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide469.png" alt="Slide 469" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide470.png" alt="Slide 470" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide471.png" alt="Slide 471" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide472.png" alt="Slide 472" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide473.png" alt="Slide 473" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide474.png" alt="Slide 474" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide475.png" alt="Slide 475" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide476.png" alt="Slide 476" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide477.png" alt="Slide 477" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide478.png" alt="Slide 478" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide479.png" alt="Slide 479" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide480.png" alt="Slide 480" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide481.png" alt="Slide 481" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide482.png" alt="Slide 482" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide483.png" alt="Slide 483" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide484.png" alt="Slide 484" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide485.png" alt="Slide 485" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide486.png" alt="Slide 486" />
        </section>
        <section>
            <img class="r-stretch" src="images/the-mask.gif" alt="Slide 487" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide488.png" alt="Slide 488" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide489.png" alt="Slide 489" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide490.png" alt="Slide 490" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide491.png" alt="Slide 491" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide492.png" alt="Slide 492" />
        </section>
        <${TitleSlide} title="Test-Driven Development" slideId="lesson_15" subtitle="Lesson 15" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide494.png" alt="Slide 494" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide495.png" alt="Slide 495" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide496.png" alt="Slide 496" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide497.png" alt="Slide 497" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide498.png" alt="Slide 498" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide499.png" alt="Slide 499" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide500.png" alt="Slide 500" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide501.png" alt="Slide 501" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide502.png" alt="Slide 502" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide503.png" alt="Slide 503" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide504.png" alt="Slide 504" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide505.png" alt="Slide 505" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide506.png" alt="Slide 506" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide507.png" alt="Slide 507" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide508.png" alt="Slide 508" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide509.png" alt="Slide 509" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide510.png" alt="Slide 510" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide511.png" alt="Slide 511" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide512.png" alt="Slide 512" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide513.png" alt="Slide 513" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide514.png" alt="Slide 514" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide515.png" alt="Slide 515" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide516.png" alt="Slide 516" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide517.png" alt="Slide 517" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide518.png" alt="Slide 518" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide519.png" alt="Slide 519" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide520.png" alt="Slide 520" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide521.png" alt="Slide 521" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide522.png" alt="Slide 522" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide523.png" alt="Slide 523" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide524.png" alt="Slide 524" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide525.png" alt="Slide 525" />
        </section>
        <${TitleSlide} title="OOP Principles, Part I" slideId="lesson_16" subtitle="Lesson 16" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide527.png" alt="Slide 527" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide528.png" alt="Slide 528" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide529.png" alt="Slide 529" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide530.png" alt="Slide 530" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide531.png" alt="Slide 531" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide532.png" alt="Slide 532" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide533.png" alt="Slide 533" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide534.png" alt="Slide 534" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide535.png" alt="Slide 535" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide536.png" alt="Slide 536" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide537.png" alt="Slide 537" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide538.png" alt="Slide 538" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide539.png" alt="Slide 539" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide540.png" alt="Slide 540" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide541.png" alt="Slide 541" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide542.png" alt="Slide 542" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide543.png" alt="Slide 543" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide544.png" alt="Slide 544" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide545.png" alt="Slide 545" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide546.png" alt="Slide 546" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide547.png" alt="Slide 547" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide548.png" alt="Slide 548" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide549.png" alt="Slide 549" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide550.png" alt="Slide 550" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide551.png" alt="Slide 551" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide552.png" alt="Slide 552" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide553.png" alt="Slide 553" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide554.png" alt="Slide 554" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide555.png" alt="Slide 555" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide556.png" alt="Slide 556" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide557.png" alt="Slide 557" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide558.png" alt="Slide 558" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide559.png" alt="Slide 559" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide560.png" alt="Slide 560" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide561.png" alt="Slide 561" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide562.png" alt="Slide 562" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide563.png" alt="Slide 563" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide564.png" alt="Slide 564" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide565.png" alt="Slide 565" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide566.png" alt="Slide 566" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide567.png" alt="Slide 567" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide568.png" alt="Slide 568" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide569.png" alt="Slide 569" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide570.png" alt="Slide 570" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide571.png" alt="Slide 571" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide572.png" alt="Slide 572" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide573.png" alt="Slide 573" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide574.png" alt="Slide 574" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide575.png" alt="Slide 575" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide576.png" alt="Slide 576" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide577.png" alt="Slide 577" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide578.png" alt="Slide 578" />
        </section>
        <section>
            <img class="r-stretch" src="images/after-these-messages.gif" alt="Slide 579" />
        </section>
        <${TitleSlide} title="OOP Principles, Part II" slideId="lesson_17" subtitle="Lesson 17" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide581.png" alt="Slide 581" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide582.png" alt="Slide 582" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide583.png" alt="Slide 583" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide584.png" alt="Slide 584" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide585.png" alt="Slide 585" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide586.png" alt="Slide 586" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide587.png" alt="Slide 587" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide588.png" alt="Slide 588" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide589.png" alt="Slide 589" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide590.png" alt="Slide 590" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide591.png" alt="Slide 591" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide592.png" alt="Slide 592" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide593.png" alt="Slide 593" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide594.png" alt="Slide 594" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide595.png" alt="Slide 595" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide596.png" alt="Slide 596" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide597.png" alt="Slide 597" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide598.png" alt="Slide 598" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide599.png" alt="Slide 599" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide600.png" alt="Slide 600" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide601.png" alt="Slide 601" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide602.png" alt="Slide 602" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide603.png" alt="Slide 603" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide604.png" alt="Slide 604" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide605.png" alt="Slide 605" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide606.png" alt="Slide 606" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide607.png" alt="Slide 607" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide608.png" alt="Slide 608" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide609.png" alt="Slide 609" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide610.png" alt="Slide 610" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide611.png" alt="Slide 611" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide612.png" alt="Slide 612" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide613.png" alt="Slide 613" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide614.png" alt="Slide 614" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide615.png" alt="Slide 615" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide616.png" alt="Slide 616" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide617.png" alt="Slide 617" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide618.png" alt="Slide 618" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide619.png" alt="Slide 619" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide620.png" alt="Slide 620" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide621.png" alt="Slide 621" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide622.png" alt="Slide 622" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide623.png" alt="Slide 623" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide624.png" alt="Slide 624" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide625.png" alt="Slide 625" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide626.png" alt="Slide 626" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide627.png" alt="Slide 627" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide628.png" alt="Slide 628" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide629.png" alt="Slide 629" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide630.png" alt="Slide 630" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide631.png" alt="Slide 631" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide632.png" alt="Slide 632" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide633.png" alt="Slide 633" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide634.png" alt="Slide 634" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide635.png" alt="Slide 635" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide636.png" alt="Slide 636" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide637.png" alt="Slide 637" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide638.png" alt="Slide 638" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide639.png" alt="Slide 639" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide640.png" alt="Slide 640" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide641.png" alt="Slide 641" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide642.png" alt="Slide 642" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide643.png" alt="Slide 643" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide644.png" alt="Slide 644" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide645.png" alt="Slide 645" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide646.png" alt="Slide 646" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide647.png" alt="Slide 647" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide648.png" alt="Slide 648" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide649.png" alt="Slide 649" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide650.png" alt="Slide 650" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide651.png" alt="Slide 651" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide652.png" alt="Slide 652" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide653.png" alt="Slide 653" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide654.png" alt="Slide 654" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide655.png" alt="Slide 655" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide656.png" alt="Slide 656" />
        </section>
        <${TitleSlide} title="Computer Languages" slideId="lesson_21" subtitle="Lesson 21" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide658.png" alt="Slide 658" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide659.png" alt="Slide 659" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide660.png" alt="Slide 660" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide661.png" alt="Slide 661" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide662.png" alt="Slide 662" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide663.png" alt="Slide 663" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide664.png" alt="Slide 664" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide665.png" alt="Slide 665" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide666.png" alt="Slide 666" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide667.png" alt="Slide 667" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide668.png" alt="Slide 668" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide669.png" alt="Slide 669" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide670.png" alt="Slide 670" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide671.png" alt="Slide 671" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide672.png" alt="Slide 672" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide673.png" alt="Slide 673" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide674.png" alt="Slide 674" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide675.png" alt="Slide 675" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide676.png" alt="Slide 676" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide677.png" alt="Slide 677" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide678.png" alt="Slide 678" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide679.png" alt="Slide 679" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide680.png" alt="Slide 680" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide681.png" alt="Slide 681" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide682.png" alt="Slide 682" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide683.png" alt="Slide 683" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide684.png" alt="Slide 684" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide685.png" alt="Slide 685" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide686.png" alt="Slide 686" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide687.png" alt="Slide 687" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide688.png" alt="Slide 688" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide689.png" alt="Slide 689" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide690.png" alt="Slide 690" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide691.png" alt="Slide 691" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide692.png" alt="Slide 692" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide693.png" alt="Slide 693" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide694.png" alt="Slide 694" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide695.png" alt="Slide 695" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide696.png" alt="Slide 696" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide697.png" alt="Slide 697" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide698.png" alt="Slide 698" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide699.png" alt="Slide 699" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide700.png" alt="Slide 700" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide701.png" alt="Slide 701" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide702.png" alt="Slide 702" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide703.png" alt="Slide 703" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide704.png" alt="Slide 704" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide705.png" alt="Slide 705" />
        </section>
        <${TitleSlide} title="Building Applications" slideId="lesson_22" subtitle="Lesson 22" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide707.png" alt="Slide 707" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide708.png" alt="Slide 708" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide709.png" alt="Slide 709" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide710.png" alt="Slide 710" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide711.png" alt="Slide 711" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide712.png" alt="Slide 712" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide713.png" alt="Slide 713" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide714.png" alt="Slide 714" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide715.png" alt="Slide 715" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide716.png" alt="Slide 716" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide717.png" alt="Slide 717" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide718.png" alt="Slide 718" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide719.png" alt="Slide 719" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide720.png" alt="Slide 720" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide721.png" alt="Slide 721" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide722.png" alt="Slide 722" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide723.png" alt="Slide 723" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide724.png" alt="Slide 724" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide725.png" alt="Slide 725" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide726.png" alt="Slide 726" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide727.png" alt="Slide 727" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide728.png" alt="Slide 728" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide729.png" alt="Slide 729" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide730.png" alt="Slide 730" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide731.png" alt="Slide 731" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide732.png" alt="Slide 732" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide733.png" alt="Slide 733" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide734.png" alt="Slide 734" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide735.png" alt="Slide 735" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide736.png" alt="Slide 736" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide737.png" alt="Slide 737" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide738.png" alt="Slide 738" />
        </section>
        <${TitleSlide} title="Intro to HTML, CSS, and JS" slideId="lesson_23" subtitle="Lesson 23" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide740.png" alt="Slide 740" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide741.png" alt="Slide 741" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide742.png" alt="Slide 742" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide743.png" alt="Slide 743" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide744.png" alt="Slide 744" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide745.png" alt="Slide 745" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide746.png" alt="Slide 746" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide747.png" alt="Slide 747" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide748.png" alt="Slide 748" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide749.png" alt="Slide 749" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide750.png" alt="Slide 750" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide751.png" alt="Slide 751" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide752.png" alt="Slide 752" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide753.png" alt="Slide 753" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide754.png" alt="Slide 754" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide755.png" alt="Slide 755" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide756.png" alt="Slide 756" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide757.png" alt="Slide 757" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide758.png" alt="Slide 758" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide759.png" alt="Slide 759" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide760.png" alt="Slide 760" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide761.png" alt="Slide 761" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide762.png" alt="Slide 762" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide763.png" alt="Slide 763" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide764.png" alt="Slide 764" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide765.png" alt="Slide 765" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide766.png" alt="Slide 766" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide767.png" alt="Slide 767" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide768.png" alt="Slide 768" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide769.png" alt="Slide 769" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide770.png" alt="Slide 770" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide771.png" alt="Slide 771" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide772.png" alt="Slide 772" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide773.png" alt="Slide 773" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide774.png" alt="Slide 774" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide775.png" alt="Slide 775" />
        </section>
        <${TitleSlide} title="JavaScript Deep Dive" slideId="lesson_24" subtitle="Lesson 24" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide777.png" alt="Slide 777" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide778.png" alt="Slide 778" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide779.png" alt="Slide 779" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide780.png" alt="Slide 780" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide781.png" alt="Slide 781" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide782.png" alt="Slide 782" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide783.png" alt="Slide 783" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide784.png" alt="Slide 784" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide785.png" alt="Slide 785" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide786.png" alt="Slide 786" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide787.png" alt="Slide 787" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide788.png" alt="Slide 788" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide789.png" alt="Slide 789" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide790.png" alt="Slide 790" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide791.png" alt="Slide 791" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide792.png" alt="Slide 792" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide793.png" alt="Slide 793" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide794.png" alt="Slide 794" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide795.png" alt="Slide 795" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide796.png" alt="Slide 796" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide797.png" alt="Slide 797" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide798.png" alt="Slide 798" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide799.png" alt="Slide 799" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide800.png" alt="Slide 800" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide801.png" alt="Slide 801" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide802.png" alt="Slide 802" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide803.png" alt="Slide 803" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide804.png" alt="Slide 804" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide805.png" alt="Slide 805" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide806.png" alt="Slide 806" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide807.png" alt="Slide 807" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide808.png" alt="Slide 808" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide809.png" alt="Slide 809" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide810.png" alt="Slide 810" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide811.png" alt="Slide 811" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide812.png" alt="Slide 812" />
        </section>
        <${TitleSlide} title="Intro to React" slideId="lesson_25" subtitle="Lesson 25" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide814.png" alt="Slide 814" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide815.png" alt="Slide 815" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide816.png" alt="Slide 816" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide817.png" alt="Slide 817" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide818.png" alt="Slide 818" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide819.png" alt="Slide 819" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide820.png" alt="Slide 820" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide821.png" alt="Slide 821" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide822.png" alt="Slide 822" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide823.png" alt="Slide 823" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide824.png" alt="Slide 824" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide825.png" alt="Slide 825" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide826.png" alt="Slide 826" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide827.png" alt="Slide 827" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide828.png" alt="Slide 828" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide829.png" alt="Slide 829" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide830.png" alt="Slide 830" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide831.png" alt="Slide 831" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide832.png" alt="Slide 832" />
        </section>
        <${TitleSlide} title="Web APIs using REST" slideId="lesson_26" subtitle="Lesson 26" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide834.png" alt="Slide 834" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide835.png" alt="Slide 835" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide836.png" alt="Slide 836" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide837.png" alt="Slide 837" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide838.png" alt="Slide 838" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide839.png" alt="Slide 839" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide840.png" alt="Slide 840" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide841.png" alt="Slide 841" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide842.png" alt="Slide 842" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide843.png" alt="Slide 843" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide844.png" alt="Slide 844" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide845.png" alt="Slide 845" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide846.png" alt="Slide 846" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide847.png" alt="Slide 847" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide848.png" alt="Slide 848" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide849.png" alt="Slide 849" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide850.png" alt="Slide 850" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide851.png" alt="Slide 851" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide852.png" alt="Slide 852" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide853.png" alt="Slide 853" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide854.png" alt="Slide 854" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide855.png" alt="Slide 855" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide856.png" alt="Slide 856" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide857.png" alt="Slide 857" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide858.png" alt="Slide 858" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide859.png" alt="Slide 859" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide860.png" alt="Slide 860" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide861.png" alt="Slide 861" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide862.png" alt="Slide 862" />
        </section>
        <${TitleSlide} title="Integrating with Backend APIs" slideId="lesson_27" subtitle="Lesson 27" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide864.png" alt="Slide 864" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide865.png" alt="Slide 865" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide866.png" alt="Slide 866" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide867.png" alt="Slide 867" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide868.png" alt="Slide 868" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide869.png" alt="Slide 869" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide870.png" alt="Slide 870" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide871.png" alt="Slide 871" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide872.png" alt="Slide 872" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide873.png" alt="Slide 873" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide874.png" alt="Slide 874" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide875.png" alt="Slide 875" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide876.png" alt="Slide 876" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide877.png" alt="Slide 877" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide878.png" alt="Slide 878" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide879.png" alt="Slide 879" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide880.png" alt="Slide 880" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide881.png" alt="Slide 881" />
        </section>
        <${TitleSlide} title="Intro to Databases" slideId="lesson_28" subtitle="Lesson 28" />
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide883.png" alt="Slide 883" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide884.png" alt="Slide 884" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide885.png" alt="Slide 885" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide886.png" alt="Slide 886" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide887.png" alt="Slide 887" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide888.png" alt="Slide 888" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide889.png" alt="Slide 889" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide890.png" alt="Slide 890" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide891.png" alt="Slide 891" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide892.png" alt="Slide 892" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide893.png" alt="Slide 893" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide894.png" alt="Slide 894" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide895.png" alt="Slide 895" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide896.png" alt="Slide 896" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide897.png" alt="Slide 897" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide898.png" alt="Slide 898" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide899.png" alt="Slide 899" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide900.png" alt="Slide 900" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide901.png" alt="Slide 901" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide902.png" alt="Slide 902" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide903.png" alt="Slide 903" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide904.png" alt="Slide 904" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide905.png" alt="Slide 905" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide906.png" alt="Slide 906" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide907.png" alt="Slide 907" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide908.png" alt="Slide 908" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide909.png" alt="Slide 909" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide910.png" alt="Slide 910" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide911.png" alt="Slide 911" />
        </section>
        <section>
            <img class="r-stretch" src="images/24q4-slides/Slide912.png" alt="Slide 912" />
        </section>
    </div>`;
}

export default Slides;