import Heading from "@/components/heading/heading";
import React from "react";
import Card from "@/components/ui/card";
import Image from "next/image"; // Import Image from next/image

export default function AboutSection() {
    return (
        <div id="about" className="pt-24 px-3 lg:px-8">
            {/* Heading */}
            <Heading number="01" title_1="About" title_2="" />
            {/* Main featured card */}
            <div className="flex gap-4">
                <Card title="About me">
                    I am a highly motivated tech enthusiast who recently graduated from college with my bachelors
                    in Computer Science. I have a strong interest and background in all things related to development,
                    data analytics, IT, and more! I am always looking for new technologies to learn, and I am always
                    trying to grow. I look forward to hearing from you!
                </Card>
                <Card title="Appalachian State University">
                    During my time at Appalachian State I learned and grew more than I could have ever imagined. I made the friends of
                    a lifetime, and learned skills that I will always carry with me. I received my bachelors in
                    Computer Science, and I completed several graduate level courses. I also learned to snowboard.
                </Card>
            </div>
            <div>
                <div className="flex gap-4">
                    {/* Picture of me Card */}
                    <Card title="">
    <div className="relative w-full h-[300px]"> {/* Adjust the height and width of the container */}
        <Image
            src="/assets/images/me/cooperphoto.jpg"
            alt="Picture of me"
            layout="fill"  // This will make the image fill the container
            objectFit="cover"  // Ensures the image maintains its aspect ratio while covering the container
            className="rounded-lg"  // Optional: add border-radius
        />
    </div>
</Card>

                    <Card title="Software Development at Florida Blue">
                        After my internship at Florida Blue, I was fortunate enough to be granted a temporary work contract. During
                        this time, I adopted even more responsibility in both full-stack development and research. I went on to work 
                        around product lifecycles, scrum methodologies, and so much more. I learned incredibly much 
                        from this work.
                    </Card>
                    <Card title="Internship at Florida Blue">
                        As an intern at Florida Blue, I worked under both the Enterprise Architecture and AI teams. I was tasked with
                        the role of developing full-stack AI driven applications, particularly RAG (Retrieval Augmented Generation) applications. 
                        I also worked and aided in the development and maintenance of large scale code and documentation.
                    </Card>
                    <Card title="Technical Support at Rumple Memorial">
                        Shortly after my employment at Rumple Memorial began, I needed to adopt a lot of responsibility. The only other
                        Technical Support employee had left, so I was left to run everything on my own. This included a wide range of
                        responsibilities from simple database management to hardware and software installation.
                    </Card>
                </div>
            </div>
        </div>
    );
}
