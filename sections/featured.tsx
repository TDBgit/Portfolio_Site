import Heading from "@/components/heading/heading";
import React from "react";
import Card from "@/components/ui/card";
import Image from "next/image";

export default function FeaturedSection() {
    return (
        <div id="projects" className="pt-24 px-3 lg:px-8">
            <Heading number="01" title_1="Projects" title_2="" />
            
            <Card title="Data Analytics, Machine Learning"> </Card>
            <div className="flex gap-4">
            <Card title={<a href="https://github.com/TDBgit/Analyzing_Retail_Data" target="_blank" rel="noopener noreferrer">Analyzing Retail Orders</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/data.jpg"
                            alt="Analyzing Retail Orders"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    Python, SQL <br />
                    Peforming end to end data analytics and data processing using Kaggle API. 
                </Card>
                <Card title={<a href="https://github.com/TDBgit/Sales_Dashboard" target="_blank" rel="noopener noreferrer">Comprehensive Sales Dashboard</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/dair.jpg"
                            alt="Comprehensive Sales Dashboard"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    SQL, Excel, Tableau  <br />
                    Generating a dataset using SQL, displaying the dataset in Tableau & Excel dashboards.
                </Card>
                <Card title={<a href="https://github.com/TDBgit/Car_Price_Prediction" target="_blank" rel="noopener noreferrer">ML for Predicting Car Prices</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/car.jpg"
                            alt="ML for Predicting Car Prices"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    Python <br />
                    Using linear regression to make future predictions based on a dataset of used car prices. 
                </Card>
            </div>
            <br />
            
            <Card title="Backend Applications"> </Card>
            <div className="flex gap-4">
                <Card title={<a href="https://github.com/TDBgit/Hiring_Portal" target="_blank" rel="noopener noreferrer">Hiring Portal</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/listingproj.jpg"
                            alt="Hiring Portal"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    Java, SpringBoot, MongoDB, React  <br />
                    Online job portal with listings, descriptions, etc. 
                </Card>
                <Card title={<a href="https://github.com/TDBgit/C-_Asteroids" target="_blank" rel="noopener noreferrer">Asteroids game</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/Asteroids.jpg"
                            alt="Asteroids game"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    C++  <br />
                    Simple asteroids game using vector graphics.
                </Card>
            </div>
            <br />

            <Card title="Fullstack Applications"> </Card>
            <div className="flex gap-4">
                <Card title={<a href="https://github.com/TDBgit/Shipment_Tracking" target="_blank" rel="noopener noreferrer">Cargo Tracking</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/cgosite.jpg"
                            alt="Cargo Tracking"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    VueJS, HTML, CSS, JavaScript, Typescript  <br />
                    Utilizing google maps APIs to simulate cargo tracking. 
                </Card>
                <Card title={<a href="https://github.com/TDBgit/Portfolio_Site" target="_blank" rel="noopener noreferrer">Portfolio site</a>}>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src="/assets/images/me/pfoliosite.jpg"
                            alt="Portfolio Site"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    ReactJS, HTML, CSS, JavaScript, Typescript  <br />
                    Scalable portfolio site to display information about me, my work, and more!
                </Card>
            </div>
            <br />
        </div>
    );
}
