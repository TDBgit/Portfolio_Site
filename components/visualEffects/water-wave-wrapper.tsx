"use client";
import {FC, ReactNode} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import WaterWave from "react-water-wave";

interface WaterWaveWrapperProps {
    imageUrl: string;
    dropRadius: string;
    perturbance: string;
    resolution: string;
    children: ()=>ReactNode;
}

const WaterWaveWrapper:FC<WaterWaveWrapperProps> = ({
    imageUrl, 
    dropRadius, 
    perturbance, 
    resolution, 
    children, 
})=>{
    return <WaterWave
    imageUrl = {imageUrl}
    dropRadius = {dropRadius}
    perturbance = {perturbance}
    resolution = {resolution}
    > 
    {children} 
    </WaterWave>;
};

export default WaterWaveWrapper;