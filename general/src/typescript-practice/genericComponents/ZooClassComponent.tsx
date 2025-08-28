import React from 'react';

type Region = 'asia' | 'europe' | 'australia';

interface RegionProps {
    name: string;
    climate: string;
    type: Region;
}

export interface AsiaRegionProps extends RegionProps {
    species: number;
}

export interface EuropeRegionProps extends RegionProps {
    languages: string[];
}

export interface AustraliaRegionProps extends RegionProps {
    wildlife: string[];
}

interface ZooProps<T extends RegionProps> {
    region: T
}

interface ZooState {
    animalsAvailable: number;
}

class ZooComponent<T extends RegionProps> extends React.Component<ZooProps<T>, ZooState> {
    constructor(props: ZooProps<T>) {
        super(props);

        this.state = {
            animalsAvailable: 20
        }
    }

    render() {
        return (
            <div>
                <h2>This is zoo in Region {this.props.region.name}</h2>
                <p>Climate: {this.props.region.climate}</p>
                <span>There is around {this.state.animalsAvailable} animals in zoo</span>
                {/* {this.props.region.type === 'europe' && (
                    <div>
                        <h3>Languages Spoken: </h3>
                        <ul>
                            {(this.props.region as EuropeRegionProps).languages.map((lang, index) => (
                                <li key={index}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                )} */}
                {
                    this.props.region.type === 'europe' ? (
                    <div>
                        <h3>Languages Spoken: </h3>
                        <ul>
                            {(this.props.region as EuropeRegionProps).languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                    ) : (<></>)
                }

            </div>
        );
    }
}

export { ZooComponent }