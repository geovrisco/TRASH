  {/* <Animated.ScrollView
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: posX}}}],
              {useNativeDriver: false},
            )}
            scrollEnabled={!cardExpanded} // cardExpanded isinya false pas awalnya
            renderToHardwareTextureAndroid={true}
            shouldRasterizeIOS={true}
            onMomentumScrollEnd={e => handleScrollEnd(e)}
            scrollEventThrottle={16}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}>
            {productData.map((item, index) => {
              let balance =
                item.currency == 'IDR'
                  ? `Rp ${toCurrency(item.balance)}`
                  : `$ ${toCurrency(item.balance)}`;
              let productImage = ProductCardMapper(item.product_sub_type);

              return (
                <CasaProductCards
                  key={index}
                  accountNo={item.account_number}
                  availableBalance={balance}
                  image={productImage}
                  productName={item.account_alias}
                  posY={posY}
                  index={index}
                  handleOnPress={() => toggleExpandAnimation(item)}
                />
              );
            })}
          </Animated.ScrollView> */}
          {/* <Animated.FlatList
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: posX}}}],
              {useNativeDriver: false},
            )}
            // pagingEnabled={true}
            snapToInterval={TOTAL_WIDTH}
            bounces={false}
            decelerationRate={Platform.OS == 'ios' ? 0 : 0.98}
            data={productData}
            horizontal={true}
            scrollEnabled={!cardExpanded}
            onMomentumScrollEnd={e => handleScrollEnd(e)}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, idx) => idx}
            renderItem={({item, index}) => {
              let balance =
                item.currency == 'IDR'
                  ? `Rp ${toCurrency(item.balance)}`
                  : `$ ${toCurrency(item.balance)}`;
              let productImage = ProductCardMapper(item.product_sub_type);

              return (
                <CasaProductCards
                  key={index}
                  accountNo={item.account_number}
                  availableBalance={balance}
                  image={productImage}
                  productName={item.account_alias}
                  posY={posY}
                  index={index}
                  handleOnPress={() => toggleExpandAnimation(item)}
                />
              );
            }}
          /> */}
          
          
          const AnimatedIndicator = ({posX, data, flatlistRef, currentPage}) => {
  const activeColor = 'rgba(255,255,255,1)';
  const inactiveColor = 'rgba(255,255,255,0.5)';
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        maxWidth: '55%',
      }}>
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',

          flexGrow: 1,
        }}
        ref={flatlistRef}
        horizontal={true}
        data={data}
        keyExtractor={(item, idx) => idx}
        renderItem={({item, index}) => {
          // const inputRange = [
          //   (index - 1) * width,
          //   index * width,
          //   (index + 1) * width,
          // ];
          // const scale = posX.interpolate({
          //   inputRange: inputRange,
          //   outputRange: [0.5, 0.7, 0.5],
          //   extrapolate: 'clamp',
          //   useNativeDriver: true,
          // });
          // const backgroundColor = posX.interpolate({
          //   inputRange: inputRange,
          //   outputRange: [
          //     'rgba(255,255,255,0.6)',
          //     'rgba(255,255,255,1)',
          //     'rgba(255,255,255,0.6)',
          //   ],
          //   extrapolate: 'clamp',
          // });
          return (
            <Animated.View
              renderToHardwareTextureAndroid={true}
              shouldRasterizeIOS={true}
              style={{
                width: 5,
                height: 5,
                borderRadius: 10,
                backgroundColor:
                  index === currentPage ? activeColor : inactiveColor,
                marginHorizontal: 8,
              }}
              key={index}
            />
          );
        }}
      />
      {/* {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = posX.interpolate({
          inputRange: inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
          useNativeDriver: true,
        });

        const backgroundColor = posX.interpolate({
          inputRange: inputRange,
          outputRange: [
            'rgba(255,255,255,0.6)',
            'rgba(255,255,255,1)',
            'rgba(255,255,255,0.6)',
          ],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            renderToHardwareTextureAndroid={true}
            shouldRasterizeIOS={true}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: backgroundColor,
              marginHorizontal: 3,
              transform: [{scale}],
            }}
            key={index}
          />
        );
      })} */}
    </View>
  );
};
