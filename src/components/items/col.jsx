import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { slider1,slider2,slider3 } from '../../assets/img';




function Col() {
    return (
        <Carousel className="rounded-xl h-510 w-full">
            <div className="relative h-full w-full">
                <img
                    src={slider1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                           ALSO
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                           YOU CAN DOWNLOAD THESE BOOKS...
                        </Typography>
                        {/* <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={slider2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            For Free
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                      YOU CAN LISTEN TO THE BOOKS YOU WANT..
                        </Typography>
                        {/* <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                   
                    src={slider1}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            NOW.. 
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                          YOU WILL LISTEN TO YOUR FAVORITE BOOKS EASILY
                        </Typography>
                        {/* <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default Col