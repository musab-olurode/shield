'use client';

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { cn } from '@/lib/utils';

const defaultContainerStyle: React.CSSProperties = {
	width: '100%',
	height: '350px',
};

const center = {
	lat: 8.488881978839185,
	lng: 4.67451057656416,
};

type MapProps = {
	className?: string;
	containerStyle?: React.CSSProperties;
};

function CustomMap({ containerStyle, className }: MapProps) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
	});

	const [map, setMap] = React.useState<google.maps.Map | null>(null);

	const onLoad = React.useCallback(function callback(map: google.maps.Map) {
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
		setMap(null);
	}, []);

	return (
		<div className={cn('min-h-[350px]', className)}>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle || defaultContainerStyle}
					center={center}
					zoom={17}
					onLoad={onLoad}
					onUnmount={onUnmount}
				>
					{/* Child components, such as markers, info windows, etc. */}
					<></>
				</GoogleMap>
			) : (
				<></>
			)}
		</div>
	);
}

export default React.memo(CustomMap);
