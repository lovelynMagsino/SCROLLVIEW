import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const ScrollComponent = () => {
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      id: 1,
      name: { firstname: 'Lovelyn', lastname: 'Magsino' },
      address: { Town: 'Bangkok', Country: 'Thailand' }
    },
    {
      id: 2,
      name: { firstname: 'John Carlo', lastname: 'Manosa' },
      address: { Town: 'Hualien', Country: 'Taiwan' }
    },
    { id:3,
      name:{ firstname: 'John bryle', lastname: 'lumantas'},
      address: {Town: 'paris', Country:'france' },
    },
    { id:4, 
      name:{firstname: 'melrose', lastname: 'cheng'},
      address:{Town: 'beijing', Country:'china' },
    },
    { id:5,
      name:{firstname: 'jea norene', lastname: 'oring'},
      address:{Town: 'los angeles', Country:'california' },
    },
    { id:6, 
      name:{firstname: 'maria luisa', lastname: 'montero'},
      address:{Town: 'palawan', Country:'Philippines' },
    },
    { id:7, 
      name:{firstname: 'sherwen', lastname: 'lahoy'},
      address:{Town: 'manila', Country:'Philippines' },
    },
    { id:8,
      name:{ firstname: 'mike', lastname: 'lumaad'},
      address:{Town: 'cebu', Country:'Philippines' },
    },
    { id:9,
      name:{ firstname: 'steven', lastname: 'chu'},
      address:{Town: 'Shanghai', Country:'china' },
    },
    { id:10,
      name:{firstname: 'sehun', lastname: 'oh'},
      address:{Town: 'seoul', Country:'south korea' },
    },
    { id:11,
      name:{firstname: 'deanna', lastname: 'wong'},
      address:{Town: 'tokyo', Country:'japan' },
    },
    { id:12,
      name:{firstname: 'amethyst', lastname: 'maldives'},
      address:{Town: 'Ayutthaya', Country:'thailand' },
    },
    { id:13,
      name:{firstname: 'nelbrey', lastname: 'Doe'},
      address:{Town: 'Savannah, Georgia', Country:'usa' },
    },
    { id:14, 
      name:{firstname: 'hannah', lastname: 'montero'},
      address:{Town: 'bohol', Country:'Philippines' },
    },
    { id:15, 
      name:{firstname: 'nikko bryle', lastname: 'santones'},
      address:{Town: 'bohol', Country:'Philippines' },
    },
    { id:16, 
      name:{firstname: 'elias', lastname: 'ilacad'},
      address:{Town: 'San Francisco', Country:'california' },
    },
    { id:17,
      name:{firstname: 'claire', lastname: 'lumaad'},
      address:{Town: 'negros oriental', Country:'Philippines'},
    },
    { id:18,
      name:{firstname: 'jacob', lastname: 'arances'},
      address:{Town: 'san diego', Country:'california' },
    },
    { id:19,  
      name:{firstname: 'sherline', lastname: 'cruz'},
      address:{Town: 'Taipei', Country:'taiwan' },
    },
    { id:20,  
      name:{firstname: 'kyle peter', lastname: 'cayatano'},
      address:{Town: 'dumaguete', Country:'Philippines' },
    },
    { id:21, 
      name:{firstname: 'mark david', lastname: 'pustanes'},
      address:{Town: 'ching mai', Country:'thailand' },
    },
    { id:22,  
      name:{firstname: 'nikka jean', lastname: 'dela cruz'},
      address:{Town: 'Strasbourg', Country:'france' },
    },
    
  ];
  const displayGuestInfo = (firstname, lastname, town, country) => {
    setSelectedGuest({ firstname, lastname, town, country });
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.guest}>LIST OF GUESTS</Text>
        {data.map((item,index) => (
          <TouchableOpacity
            key={index.id}
            style={styles.itemContainer}
            onPress={() =>
              displayGuestInfo(
                item.name.firstname,
                item.name.lastname,
                item.address.Town,
                item.address.Country
              )
            }
          >
            <Text style={styles.id}>{index.id}</Text>
            <Text style={styles.stylename}>
              {item.name.lastname}, {item.name.firstname}
            </Text>
            <Text style={styles.text}>
              {item.address.Town}, {item.address.Country}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          hideModal();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedGuest && (
              <>
                <Text style={styles.modalText}>
                    <Text>Hi! I am </Text>

                  {selectedGuest.firstname}, {selectedGuest.lastname}
                </Text>
                <Text style={styles.modalText}>
                    <Text> from </Text>

                  {selectedGuest.town}, {selectedGuest.country}
                </Text>
              </>
            )}
            <TouchableOpacity onPress={() => hideModal()} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
   
  },
  modalText: {
    fontSize: 20,
    fontStyle:'italic',
    fontFamily:'arial',
    marginBottom: 10,
    marginTop: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  closeButton: {
    padding: 15,
    backgroundColor: 'darkblue',
    borderRadius: 5,
    marginTop: 10,
    marginBottom:5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  itemContainer: {
    padding: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stylename: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  guest: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
    marginTop: 250,
    marginLeft: 20,
  },
});

export default ScrollComponent;