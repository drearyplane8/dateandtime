#include <stdio.h>
#include <sysinfoapi.h>

int main(){
    SYSTEMTIME lt;
    GetLocalTime(&lt);
    return lt.wHour;
}