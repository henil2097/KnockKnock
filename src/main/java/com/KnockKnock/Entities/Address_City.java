package com.KnockKnock.Entities;

public class Address_City {

    private String addressName;
    private String addressLine;

    private String addressLandmark;

    private String addressPincode;

    private String cityName;

    private String cityState;

    private String cityCountry;

    private Boolean isDefaultAddress;

    public Address_City(String addressName, String addressLine, String addressLandmark, String addressPincode, String cityName, String cityState, String cityCountry,Boolean isDefaultAddress) {
        this.addressName = addressName;
        this.addressLine = addressLine;
        this.addressLandmark = addressLandmark;
        this.addressPincode = addressPincode;
        this.cityName = cityName;
        this.cityState = cityState;
        this.cityCountry = cityCountry;
        this.isDefaultAddress = isDefaultAddress;
    }

    public String getAddressName() {
        return addressName;
    }

    public void setAddressName(String addressName) {
        this.addressName = addressName;
    }

    public String getAddressLine() {
        return addressLine;
    }

    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }

    public String getAddressLandmark() {
        return addressLandmark;
    }

    public void setAddressLandmark(String addressLandmark) {
        this.addressLandmark = addressLandmark;
    }

    public String getAddressPincode() {
        return addressPincode;
    }

    public void setAddressPincode(String addressPincode) {
        this.addressPincode = addressPincode;
    }

    public Boolean getDefaultAddress() {
        return isDefaultAddress;
    }

    public void setDefaultAddress(Boolean defaultAddress) {
        isDefaultAddress = defaultAddress;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getCityState() {
        return cityState;
    }

    public void setCityState(String cityState) {
        this.cityState = cityState;
    }

    public String getCityCountry() {
        return cityCountry;
    }

    public void setCityCountry(String cityCountry) {
        this.cityCountry = cityCountry;
    }
}