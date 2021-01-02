import React from 'react';
import {View,Text, FlatList} from 'react-native';
import {AlbumType} from '../../types';
import styles from './styles';
import Album from '../Album'

export type AlbumCategoryProps = {
    title: string,
    albums: [AlbumType],
}

const AlbumCategory = (props:AlbumCategoryProps) => (
        <View>
            {/*Title of category*/}
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
                data={props.albums}
                renderItem={({ item }) => <Album album={item}/>}
                keyExtractor={( item ) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </View>
    )

export default AlbumCategory;