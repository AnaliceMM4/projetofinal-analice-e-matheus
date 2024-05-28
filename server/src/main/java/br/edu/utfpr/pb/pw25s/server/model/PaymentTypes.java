/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package br.edu.utfpr.pb.pw25s.server.model;

/**
 *
 * @author mathe
 */
public enum PaymentTypes {
    PIX("PIX"),
    CARTAOCREDITO("Cartão de crédito"),
    CARTAODEBITO("Cartão de débito");
    
    private String paymentType;

    private PaymentTypes(String paymentType ) {
        this.paymentType = paymentType;
    }

    public String getPaymentType() {
        return paymentType;
    }

    @Override
    public String toString() {
        return paymentType;
    }
}
    
   
