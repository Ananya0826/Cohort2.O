// Online C++ compiler to run C++ program online
#include <iostream>
#include<vector>
using namespace std;
int main() {
    vector<int>arr;
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        arr.push_back(x);
    }
    vector<int>c(*max_element(arr.begin(),arr.end()),0);
    for(int i=0;i<n;i++){
        c[arr[i]]++;
    }
    for(int i=1;i<c.size();i++){
        c[i]+=c[i-1];
    }
    for(int i=0;i<c.size();i++){
        cout<<c[i];
    }
    return 0;
}